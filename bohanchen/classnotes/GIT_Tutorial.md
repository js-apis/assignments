# GIT Tutorial

Linux, UNIX, OS X, GIT Cygwin

## Init

Make a folder. Replace "gitrepo" with your new folder name.

```zsh
> mkdir gitrepo
```

Go into folder and make the repository

```zsh
> cd gitrepo
> git init
```


## Add Files

Add a file with some text editor, Vim, EMACS, Nano, etc. Replace "readme.md" with any filename you're creating.

```zsh
> nano readme.md
```

Then Add and Commit, the following line adds everything in the directory, then a quick commit with message.

```zsh
> git add .
> git commit -m "first commit"
```

Check Status to see if we're working clean.

```zsh
> git status
```

## Add Branch

Create a branch and switch to that branch. Replace "newBranch" with the name of the branch you want create.

```zsh
> git branch newBranch
> git checkout newBranch
```

Work in this branch as much as you would like with adding files and committing changes. Can use the single line add and commit like this:

```zsh
> git commit -am "commit message"
```

## Merge into Master Branch

Now to add changes from some other branch into the Master branch. Let's see what branch were on and then checkout the master branch.

```zsh
> git branch --list
> git checkout master
```

Merge in changes from some other branch we see from our listing. Replace "newBranch" with the name of the branch to get the updates from.

```zsh
> git merge newBranch
```

If Master hasn't changed, then you're done. If you want to delete the branch you merged into master then use the below and replace "newBranch" with the branch to delete.

```zsh
> git branch --delete newBranch
```

## Conflict

If during the merge, GIT complains about conflicts, the you need to fix them. Edit the file in any text editor and look at where it's complaining. Somewhere in the file you'll see something like this:

```
>>>>>>> mergedIntoBranchName
merge into branch code
=======
merge from branch code
<<<<<<< mergedFromBranchName
```

This shows both branches code in one place. Starting with ">>>>>>> mergedIntoBranchName", separated by the "=======", ending with "<<<<<<< mergedFromBranchName", and you need to decide how to resolve this. 

Ultimately, you'll need to delete the wrapper text lines and leave what you want, so that could mean something that looks like this.

```
merge into and from branch code
```

Save. Commit. Rejoice. 

## Log

To see some graphical representation of branching in the terminal you can use log.

```zsh
> git log
```

Add in some fancy flags to make it more tolerable.

```zsh
> git log --graph --all --oneline --decorate
```

Voilá