export interface Project {
  name: string;
  describe: string;
  repo: any;
  repo_ssh: string;
  language: string;
  project_location: string;
  owner: string;
  branch?: string;
  commitId?: string;
  fetchTimestamp?: Date;
  createDate?: Date;
}
