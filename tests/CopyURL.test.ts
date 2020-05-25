import CopyURL from '@/Modules/CopyURL'

document.execCommand = jest.fn()

const mockDOM = `<a class="button-copy fn-copy-url">URLをコピー</a>`

const mockResult = 'https://example.com/index.html'

const mockURL = [
  { endpoint: mockResult, params: '', hash: '' },
  { endpoint: mockResult, params: '?gender=female', hash: '' },
  { endpoint: mockResult, params: '?gender=male', hash: '' },
  { endpoint: mockResult, params: '', hash: '#anchor-exercise' },
  { endpoint: mockResult, params: '', hash: '#anchor-meal' },
  { endpoint: mockResult, params: '?gender=female', hash: '#anchor-exercise' },
  { endpoint: mockResult, params: '?gender=female', hash: '#anchor-meal' },
  { endpoint: mockResult, params: '?gender=male', hash: '#anchor-exercise' },
  { endpoint: mockResult, params: '?gender=male', hash: '#anchor-meal' }
]

const addURL = (endpoint: string, params: string, hash: string): void => {
  Object.defineProperty(window, 'location', {
    writable: true,
    value: {
      href: `${endpoint}${params}${hash}`,
      search: params,
      hash: hash
    }
  })
}

describe('CopyURL', () => {
  it('Check Clean URL', () => {
    document.body.innerHTML = mockDOM
    mockURL.map((info) => {
      addURL(info.endpoint, info.params, info.hash)
      const copyURL = new CopyURL()
      copyURL.core()
      document.querySelector('.fn-copy-url')!.dispatchEvent(new Event('click'))
      expect(copyURL.core()).toBe(mockResult)
    })
  })
})
