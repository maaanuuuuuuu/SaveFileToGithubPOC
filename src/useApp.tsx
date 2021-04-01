import config from "../config.json";
import {useStateWithLocalStorage} from "./hooks";
import {useEffect, useState} from "react";
import simpleGit, {SimpleGit}  from "simple-git";

export const useApp = () => {

    const [gitURL, setGitURL] = useStateWithLocalStorage("gitURL", "");
    const [selectedFile, setSelectedFile] = useStateWithLocalStorage("selectedFile", "");
    const [isGitURLVerified, setIsGitURLVerified] = useState<Boolean>(false);

    useEffect(() => {
        setIsGitURLVerified(false);
        console.log("check if repo exists");
        if (gitURL === "") {
            return undefined;
        }
        const git: SimpleGit = simpleGit();
        console.log(git);
        (async () => {
            try {
                console.log("GIT Status")
                console.log(await git.status());
                await git.init();
                await git.addRemote('origin', gitURL);
            }
            catch (e) {
                console.log(e);
            }
        })();


    }, [gitURL])
    const init = () => {
        // git init

    }
    const add = () => {
        // git add
    }
    const commit = () => {
        // git commit
    }
    const push = () => {
        // const remote = `https://${USER}:${PASS}@${REPO}`;
        // $ git remote add origin git@github.com:username/new_repo
        // $ git push -u origin master
    }

    return {gitURL, setGitURL, selectedFile, setSelectedFile, isGitURLVerified};
}
