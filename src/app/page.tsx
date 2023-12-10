import * as stylex from "@stylexjs/stylex"

const styles = stylex.create({
  base: {
    fontSize: 40,
    lineHeight: 1.5,
    color: "rgb(60,60,60)",
  },
  highlighted: {
    fontSize: 50,
  },
})

export default function Home() {
  return (
    <main>
      <div {...stylex.props(styles.highlighted)}>working?</div>
    </main>
  )
}
