import { Selector } from 'testcafe';



fixture `Dustin's Ducks`
    .page `https://dustinsducks.s3.us-east-2.amazonaws.com/purchase.html`;

test('My first test', async t => {
    await t
        .typeText('#firstName', 'Daniel')
        .typeText('.lastName', 'Plainview')
        .typeText('.drakes', '5')
        .typeText('.hens', '4')
        .click('.submit-button')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#pConfName').innerText).eql('Purchaser: Daniel Plainview');
});
