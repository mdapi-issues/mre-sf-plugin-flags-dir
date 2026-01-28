import { TestContext } from "@salesforce/core/testSetup";
import { stubSfCommandUx } from "@salesforce/sf-plugins-core";
import { expect } from "chai";
import { HelloCommand } from "../../src/commands/hello.js";

describe("hello", () => {
  const $$ = new TestContext();

  beforeEach(async () => {
    stubSfCommandUx($$.SANDBOX);
  });

  it("should greet Salesforce by default", async () => {
    const result = await HelloCommand.run([]);
    expect(result.output).to.deep.equal("Hello Salesforce!");
  });

  it("should greet a single mascot", async () => {
    const result = await HelloCommand.run(["--name", "Astro"]);
    expect(result.output).to.deep.equal("Hello Astro!");
  });

  it("should greet two mascots given two flags", async () => {
    const result = await HelloCommand.run([
      "--name",
      "Astro",
      "--name",
      "Codey",
    ]);
    expect(result.output).to.deep.equal("Hello Astro, Codey!");
  });

  it("should greet two mascots given a flags dir", async () => {
    const result = await HelloCommand.run(["--flags-dir", "mascots"]);
    expect(result.output).to.deep.equal("Hello Astro, Codey!");
  });
});
