"strict mode";

describe("Rules", function() {
  var rules;

  beforeEach(function() {
    rules = new Rules();
  });

  it("has a rowClaimed method", function() {
    expect(rules.rowClaimed).toBeDefined();
  });
});
