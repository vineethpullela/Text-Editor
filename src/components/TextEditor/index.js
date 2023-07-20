import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  EditorContainer,
  LeftContainer,
  MainHeading,
  RightContainer,
  HomeImage,
  ToolList,
  ToolItem,
  Button,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  onCLickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    const bold = isBold ? '#faff00' : '#f1f5f9'
    const italic = isItalic ? '#faff00' : '#f1f5f9'
    const underline = isUnderline ? '#faff00' : '#f1f5f9'

    return (
      <AppContainer>
        <EditorContainer>
          <LeftContainer>
            <MainHeading>Text Editor</MainHeading>
            <HomeImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftContainer>
          <RightContainer>
            <ToolList>
              <ToolItem>
                <Button
                  type="button"
                  onClick={this.onCLickBold}
                  colorText={bold}
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </Button>
              </ToolItem>
              <ToolItem>
                <Button
                  type="button"
                  onClick={this.onClickItalic}
                  colorText={italic}
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </Button>
              </ToolItem>
              <ToolItem>
                <Button
                  type="button"
                  onClick={this.onClickUnderline}
                  colorText={underline}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ToolItem>
            </ToolList>
            <TextArea
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            />
          </RightContainer>
        </EditorContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
