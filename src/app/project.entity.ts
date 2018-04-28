export interface Project {
  branch?: string;
  name: string;
  describe: any;
  git_name: string;
  language: string;
  owner: string;
  project_location: string;
  project_name: string;
  repo: string;
  repo_doc: any;
  repo_ssh: string;
  slug: string;
  commitId?: string;
  fetchTimestamp?: Date;
  createDate?: Date;
}
