export interface JenkinsConfiguration {
  uid?: string;
  connection_name?: string;
  project: string;
  project_slug: string;
  server: string;
  username: string;
  password: string;
  jobsname: string;
  owner?: string;
}
