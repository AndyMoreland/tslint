/*
 * Copyright 2013 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {TestUtils} from "../lint";

describe("<no-trailing-whitespace>", () => {
    const NoTrailingWhitespaceRule = TestUtils.getRule("no-trailing-whitespace");
    const fileName = "rules/trailing.test.ts";
    const createFailure = TestUtils.createFailuresOnFile(fileName, NoTrailingWhitespaceRule.FAILURE_STRING);

    it("forbids trailing whitespace", () => {
        const actualFailures = TestUtils.applyRuleOnFile(fileName, NoTrailingWhitespaceRule);
        const expectedFailure1 = createFailure([2, 24], [2, 28]);
        const expectedFailure2 = createFailure([3, 32], [3, 36]);
        const expectedFailure3 = createFailure([5, 1], [5, 5]);
        const expectedFailure4 = createFailure([6, 1], [6, 5]);
        const expectedFailure5 = createFailure([9, 2], [9, 6]);

        TestUtils.assertContainsFailure(actualFailures, expectedFailure1);
        TestUtils.assertContainsFailure(actualFailures, expectedFailure2);
        TestUtils.assertContainsFailure(actualFailures, expectedFailure3);
        TestUtils.assertContainsFailure(actualFailures, expectedFailure4);
        TestUtils.assertContainsFailure(actualFailures, expectedFailure5);
        assert.lengthOf(actualFailures, 5);
    });
});
