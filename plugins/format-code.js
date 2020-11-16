import prettier from 'prettier/standalone'
import parserPostcss from 'prettier/parser-postcss'

const formatCode = function (code, type) {
  const optionsMap = {
    scss: {
      parser: 'scss',
      plugins: [parserPostcss]
    }
  }
  return prettier.format(code, optionsMap[type])
}

export default function (context, inject) {
  inject('formatCode', formatCode)
}
