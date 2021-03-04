import isPalindrome from '../task.js'

describe('Testing isPalindrome', () => {
    it('check abcd', () => {
        const output = (
            isPalindrome('abcd')
        );
        expect(output).toEqual(false);
    })

    it('check abcd', () => {
        const output = (
            isPalindrome('A man a plan a canal Panama')
        );
        expect(output).toEqual(true);
    })

    it('check ""', () => {
        const output = (
            isPalindrome('')
        );
        expect(output).toEqual(true);
    })

    it('check abcdcba', () => {
        const output = (
            isPalindrome('abcdcba')
        );
        expect(output).toEqual(true);
    })

    it('check ...', () => {
        const output = (
            isPalindrome('...')
        );
        expect(output).toEqual(true);
    })

    it('check А в Енисее — синева', () => {
        const output = (
            isPalindrome('А в Енисее синева')
        );
        expect(output).toEqual(true);
    })

    it('check А луна канула', () => {
        const output = (
            isPalindrome('А луна канула')
        );
        expect(output).toEqual(true);
    })

    it('check А муза рада музе без ума да разума', () => {
        const output = (
            isPalindrome('А муза рада музе без ума да разума')
        );
        expect(output).toEqual(true);
    })

    it('check Лучше знать немного истинно хорошего и нужного', () => {
        const output = (
            isPalindrome('Лучше знать немного истинно хорошего и нужного')
        );
        expect(output).toEqual(false);
    })

    it('check Знание только тогда знание', () => {
        const output = (
            isPalindrome('Знание только тогда знание')
        );
        expect(output).toEqual(false);
    })

    it('check Мысль только тогда движет жизнью', () => {
        const output = (
            isPalindrome('Мысль только тогда движет жизнью')
        );
        expect(output).toEqual(false);
    })
});
