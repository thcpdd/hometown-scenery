import AntdParagraph from "antd/es/typography/Paragraph";

/*
* 重写 Ant Design 的 Paragraph 组件
* 重写后：字体大小默认 16px，每个组件自带 2 个字符的缩进
* */
const Paragraph = ({ children, fontSize, ...args }) => {
  return (
      <AntdParagraph
        style={{fontSize: fontSize || '16px', textIndent: '2em'}}
        {...args}
      >{children}</AntdParagraph>
  )
}

export default Paragraph
