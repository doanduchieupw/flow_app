import { createStyles } from "@mantine/core";
import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";

const useStyles = createStyles((theme) => ({
  typographyStylesProvider: {
    height: "100%",
    position: "relative",
  },
  content: {
    height: "100%",
  },
  root: {
    border: "none",
  },
}));

const Editor = () => {
  const { classes } = useStyles();
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: "",
  });

  return (
    <RichTextEditor
      editor={editor}
      className="w-full h-full overflow-visible"
      classNames={{
        typographyStylesProvider: classes.typographyStylesProvider,
        content: classes.content,
        root: classes.root,
      }}
    >
      {editor && (
        <BubbleMenu editor={editor}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Link />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
          </RichTextEditor.ControlsGroup>
        </BubbleMenu>
      )}
      <RichTextEditor.Content />
    </RichTextEditor>
  );
};

export default Editor;
