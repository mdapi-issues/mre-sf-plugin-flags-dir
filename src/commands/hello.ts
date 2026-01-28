import { Flags, SfCommand } from "@salesforce/sf-plugins-core";

export type HelloResult = {
  output: string;
};

export class HelloCommand extends SfCommand<HelloResult> {
  public static readonly summary = "print a list of strings";
  public static readonly examples = [
    "<%= config.bin %> <%= command.id %> --name Astro --name Codey",
    "<%= config.bin %> <%= command.id %> --flags-dir mascots",
  ];

  public static readonly flags = {
    name: Flags.string({
      char: "n",
      summary: "name to print",
      multiple: true,
      default: ["Salesforce"],
    }),
  };

  public async run(): Promise<HelloResult> {
    const { flags } = await this.parse(HelloCommand);
    const output = `Hello ${flags.name.join(", ")}!`;
    this.log(output);
    return {
      output,
    };
  }
}
