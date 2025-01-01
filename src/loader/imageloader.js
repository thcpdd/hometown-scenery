// 当图片使用了 Next.js 中的 Image 组件并使用 'export' 模式打包后图片资源无法显示
// https://manual.toulan.fun/posts/nextjs-export-static-image-src-path/
// https://nextjscn.org/docs/app/api-reference/next-config-js/images#%E5%8A%A0%E8%BD%BD%E5%99%A8%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B
const ImageLoader = ({ src }) => {
  return '/images' + src
}

export default ImageLoader
