export interface Project {
  slug: string;
  name: string;
  git_name: string;
  describe: string;
  repo: string;
  repo_ssh: string;
  repo_doc: any;
  language: string;
  project_location: string;
  project_name: string;
  owner: string;
  branch?: string;
  commitId?: string;
  fetchTimestamp?: Date;
  createDate?: Date;
}
