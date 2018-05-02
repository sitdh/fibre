export class AppCredential {
  constructor(
    public name: string,
    public credentail: string,
    public secret?: string,
    public redirectUrl?: string,
    public scope?: string,
    public allowSignup?: string
  ) { }
}
