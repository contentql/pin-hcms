# Updated

Now we are using git x modules

# How to work with git submodules (outdated)

1. first we need to checkout to `src/blocks` main branch
2. add your commits preferable using `git add` . and
   `git commit -m "name of your commit"`
3. then navigate to `root` of the repo and add the remote to our commit
   `git submodule update --remote --merge`

# Note

Always ensure both remote submodules and our repo was in sync
