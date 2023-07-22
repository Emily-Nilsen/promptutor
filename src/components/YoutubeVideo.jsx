import ReactPlayer from 'react-player/lazy'

export function YoutubeVideo({ publicId }) {
  return (
    <div className="items-center justify-center overflow-hidden rounded-2xl">
      <div className="relative pt-[56.25%]">
        <ReactPlayer
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
          url={publicId}
        />
      </div>
    </div>
  )
}
