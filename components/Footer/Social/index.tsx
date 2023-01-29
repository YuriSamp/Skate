
interface Props {
  path: string,
  url: string
}

export default function Social({ path, url }: Props) {
  return (
    <a className="rede-social" href={url} target="_blank" rel="noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" className="svg-rede"
        viewBox="0 0 16 16">
        <path
          d={path} />
      </svg>
    </a>

  )
}