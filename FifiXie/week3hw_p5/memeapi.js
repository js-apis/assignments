window.MgApi = {
        _apiKey: null,
        _sessionKey: null,

        _onError: null,

        _imagesHost: (window.location.host.indexOf("localhost") == 0) ? "http://localhost/MemeGenerator.Web.Images" : "https://memegenerator.net/img",

       defaultApiPageSize: 15,

        getImageUrl: function (imageID, width, height) {
            return this._getUrl("images", imageID, width, height);
        },

        getInstanceImageUrl: function(instanceID, width, height)
        {
            return this._getUrl("instances", instanceID, width, height);
        },

        getInstanceText: function(instance)
        {
            return instance ? (instance.text0 + " " + instance.text1).trim() : null;
        },

        msToJsDate: function(date, timeZoneOffset)
        {
            var dt = moment(date);

            dt.subtract((timeZoneOffset * 60), "minutes");
            dt.utcOffset(0);

            return dt.toDate();
        },

        _getUrl: function (type, id, width, height) {
            if (width) {
                if (height) {
                    return window.MgApi._imagesHost + "/" + type + "/" + width + "x" + height + "/" + id + ".jpg";
                }
                else // width but no height
                {
                    return window.MgApi._imagesHost + "/" + type + "/" + width + "x/" + id + ".jpg";
                }
            }
            else if (height) // height but no width
            {
                return window.MgApi._imagesHost + "/" + type + "/x" + height + "/" + id + ".jpg";
            }
            else // no width and no height
            {
                return window.MgApi._imagesHost + "/" + type + "/" + id + ".jpg";
            }
        },

        _callMethod: function(name, args)
        {
            var d = $.Deferred();

            var args2 = (args || {});

            if (window.MgApi._apiKey)
            {
                args2.apiKey = window.MgApi._apiKey;
            }

            if (window.MgApi._sessionKey) {
                args2.sessionKey = window.MgApi._sessionKey;
            }

            var ajaxCall = $.ajax({
                url: ((((window.location.host == "memegenerator.net") || (window.location.host.indexOf("localhost:18009") != -1)) ? ("/Version1Api/") + name : ("http://version1.api.memegenerator.net/" + name)) + ("?u=" + (new Date().valueOf()))),
                type: "GET",
                crossDomain: true,
                data: args2,
                success: function(e) {
                    if (e.success)
                    {
                        d.resolve(e.result);
                    }
                    else
                    {
                        if (window.MgApi._onError)
                        {
                            window.MgApi._onError(e.errorMessage);
                        }
                        else
                        {
                            d.reject(e.errorMessage);
                        }
                    }
                },
                error: function(e) {
                    try
                    {
                        // I don"t know why this successful call get to the error handler
                        if (e.status == 200) {
                            var response = JSON.parse(e.responseText);
                            if (response.success)
                            {
                                d.resolve(response.result);
                                return;
                            }
                        }

                        if (e.responseText.indexOf("{") == 0) {
                            var obj = JSON.parse(e.responseText);
                            if (obj.errorMessage) {
                                d.reject(obj.errorMessage);
                            }
                            throw (e.responseText);
                        }
                        else
                        {
                            var regex = new RegExp("<title>(.+?)</title>")
                            var title = e.responseText.match(regex)[1];
                            var msg = (title || genericErrorMessage);
                            if (window.MgApi._onError)
                            {
                                window.MgApi._onError(msg);
                            }
                            else
                            {
                                throw (msg);
                            }
                        }
                    }
                    catch (ex)
                    {
                        if (window.MgApi._onError)
                        {
                            window.MgApi._onError(ex);
                        }
                        else
                        {
                            d.reject(ex);
                        }
                    }
                }
            });

            return d;
        },

        Init: function(apiKey, sessionKey)
        {
            window.MgApi._apiKey = apiKey;
            window.MgApi._sessionKey = sessionKey;
        },

        SetApiKey: function(apiKey)
        {
            window.MgApi._apiKey = apiKey;
        },

        Login: function(username, password)
        {
            window.MgApi._callMethod("MgUser_Login", { usernameOrEmail: username, password: password })
                .done(function(result) { window.MgApi._sessionKey = result.loginSession.sessionKey });
        },


    Comment_Create: function(entityName, entityID, parentCommentID, text)
    {
        return MgApi._callMethod("Comment_Create", { entityName: entityName, entityID: entityID, parentCommentID: parentCommentID, text: text });
    },
    Comment_Delete: function(commentID)
    {
        return MgApi._callMethod("Comment_Delete", { commentID: commentID });
    },
    Comments_Select: function(entityName, entityID, parentCommentID)
    {
        return MgApi._callMethod("Comments_Select", { entityName: entityName, entityID: entityID, parentCommentID: parentCommentID });
    },
    ContentFlag_Create: function(contentUrl, reason, email)
    {
        return MgApi._callMethod("ContentFlag_Create", { contentUrl: contentUrl, reason: reason, email: email });
    },
    Generator_Create: function(image, displayName)
    {
        return MgApi._callMethod("Generator_Create", { image: image, displayName: displayName });
    },
    Generator_Select_ByUrlNameOrGeneratorID: function(generatorID, urlName)
    {
        return MgApi._callMethod("Generator_Select_ByUrlNameOrGeneratorID", { generatorID: generatorID, urlName: urlName });
    },
    Generators_Search: function(q, pageIndex, pageSize)
    {
        return MgApi._callMethod("Generators_Search", { q: q, pageIndex: pageIndex, pageSize: pageSize });
    },
    Generators_Select_ByMgUser: function(byMgUserID, pageIndex, pageSize)
    {
        return MgApi._callMethod("Generators_Select_ByMgUser", { byMgUserID: byMgUserID, pageIndex: pageIndex, pageSize: pageSize });
    },
    Generators_Select_ByNew: function(pageIndex, pageSize)
    {
        return MgApi._callMethod("Generators_Select_ByNew", { pageIndex: pageIndex, pageSize: pageSize });
    },
    Generators_Select_ByPopular: function(pageIndex, pageSize, days)
    {
        return MgApi._callMethod("Generators_Select_ByPopular", { pageIndex: pageIndex, pageSize: pageSize, days: days });
    },
    Generators_Select_ByRecentlyCaptioned: function()
    {
        return MgApi._callMethod("Generators_Select_ByRecentlyCaptioned", {  });
    },
    Generators_Select_BySubscriber: function(subscriberMgUserID)
    {
        return MgApi._callMethod("Generators_Select_BySubscriber", { subscriberMgUserID: subscriberMgUserID });
    },
    Generators_Select_ByTrending: function()
    {
        return MgApi._callMethod("Generators_Select_ByTrending", {  });
    },
    Generators_Select_ByUpvoted: function(byMgUserID, pageIndex, pageSize)
    {
        return MgApi._callMethod("Generators_Select_ByUpvoted", { byMgUserID: byMgUserID, pageIndex: pageIndex, pageSize: pageSize });
    },
    Generators_Select_Related_ByDisplayName: function(displayName)
    {
        return MgApi._callMethod("Generators_Select_Related_ByDisplayName", { displayName: displayName });
    },
    Instance_Create: function(languageCode, generatorID, imageID, text0, text1)
    {
        return MgApi._callMethod("Instance_Create", { languageCode: languageCode, generatorID: generatorID, imageID: imageID, text0: text0, text1: text1 });
    },
    Instance_Delete: function(instanceID)
    {
        return MgApi._callMethod("Instance_Delete", { instanceID: instanceID });
    },
    Instance_Select: function(instanceID)
    {
        return MgApi._callMethod("Instance_Select", { instanceID: instanceID });
    },
    Instances_Search: function(q, pageIndex, pageSize)
    {
        return MgApi._callMethod("Instances_Search", { q: q, pageIndex: pageIndex, pageSize: pageSize });
    },
    Instances_Select_By_SubscriberMgUserID: function(sessionKey, languageCode, fromInstanceID, pageSize)
    {
        return MgApi._callMethod("Instances_Select_By_SubscriberMgUserID", { sessionKey: sessionKey, languageCode: languageCode, fromInstanceID: fromInstanceID, pageSize: pageSize });
    },
    Instances_Select_ByMgUser: function(byMgUserID, pageIndex, pageSize)
    {
        return MgApi._callMethod("Instances_Select_ByMgUser", { byMgUserID: byMgUserID, pageIndex: pageIndex, pageSize: pageSize });
    },
    Instances_Select_ByNew: function(languageCode, pageIndex, urlName)
    {
        return MgApi._callMethod("Instances_Select_ByNew", { languageCode: languageCode, pageIndex: pageIndex, urlName: urlName });
    },
    Instances_Select_ByPopular: function(languageCode, pageIndex, urlName, days)
    {
        return MgApi._callMethod("Instances_Select_ByPopular", { languageCode: languageCode, pageIndex: pageIndex, urlName: urlName, days: days });
    },
    Instances_Select_ByUpvoted: function(byMgUserID, pageIndex, pageSize)
    {
        return MgApi._callMethod("Instances_Select_ByUpvoted", { byMgUserID: byMgUserID, pageIndex: pageIndex, pageSize: pageSize });
    },
    MgImage_Select: function(mgImageID)
    {
        return MgApi._callMethod("MgImage_Select", { mgImageID: mgImageID });
    },
    MgImages_Search: function(q)
    {
        return MgApi._callMethod("MgImages_Search", { q: q });
    },
    MgUser_Login: function(username, password)
    {
        return MgApi._callMethod("MgUser_Login", { username: username, password: password });
    },
    MgUser_Login_Facebook: function(facebookAccessToken)
    {
        return MgApi._callMethod("MgUser_Login_Facebook", { facebookAccessToken: facebookAccessToken });
    },
    MgUser_SignUp: function(email, username, password)
    {
        return MgApi._callMethod("MgUser_SignUp", { email: email, username: username, password: password });
    },
    MgUser_Update_Image: function(sessionKey, image)
    {
        return MgApi._callMethod("MgUser_Update_Image", { sessionKey: sessionKey, image: image });
    },
    MgUser_Update_Username: function(sessionKey, newUsername)
    {
        return MgApi._callMethod("MgUser_Update_Username", { sessionKey: sessionKey, newUsername: newUsername });
    },
    MgUsers_Select_ByPublisher: function(publisherMgUserID)
    {
        return MgApi._callMethod("MgUsers_Select_ByPublisher", { publisherMgUserID: publisherMgUserID });
    },
    MgUsers_Select_BySubscriber: function(subscriberMgUserID)
    {
        return MgApi._callMethod("MgUsers_Select_BySubscriber", { subscriberMgUserID: subscriberMgUserID });
    },
    Templates_Select_ByUrlName: function(urlName)
    {
        return MgApi._callMethod("Templates_Select_ByUrlName", { urlName: urlName });
    },
    Vote: function(entityName, entityID, voteScore)
    {
        return MgApi._callMethod("Vote", { entityName: entityName, entityID: entityID, voteScore: voteScore });
    },
};
