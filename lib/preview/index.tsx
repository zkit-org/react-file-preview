import { type FC, useMemo, useState } from 'react'

export type PreviewFile = {
  url: string // 文件地址 必传
  name?: string // 文件名称 可选
  type?: string // 文件类型 可选
}

export type FilePreviewProps = {
  files: PreviewFile[] // 文件列表 必传
  className?: string // 类名 可选
  controller?: boolean // 是否显示控制器 可选
  loop?: boolean // 是否循环 可选
  initialIndex?: number // 初始索引 可选
  theme?: 'light' | 'dark' | 'system' // 主题 可选
  onClose?: () => void // 关闭回调 可选
  onDownload?: (file: File) => void // 下载回调 可选
}

export const FilePreview: FC<FilePreviewProps> = (props) => {
  const { files, controller = true, loop = true, initialIndex = 0 } = props
  const [index, setIndex] = useState(initialIndex)

  const preview = useMemo(() => {
    return <div>{files[index].url}</div>
  }, [index, files])

  return <div>{preview}</div>
}