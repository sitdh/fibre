export interface Project {
  name: string;
  describe: string;
  repository: string;
  branch: string;
  commitId: string;
  fetchTimestamp: Date;
  createDate: Date;
}
