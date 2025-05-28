'use client'

import { FilePreview, type PreviewFile } from 'react-file-preview'

const FILES: PreviewFile[] = [
  {
    url: '/assets/demo.xlsx',
  },
]

export default function Home() {
  return (
    <div>
      <FilePreview files={FILES} />
    </div>
  )
}
