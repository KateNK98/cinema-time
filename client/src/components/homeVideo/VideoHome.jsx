// import styles from 'VideoHome.module.css';

export default function VideoHome() {
  return(
    <div className="row mt-3">
      <div className="col">
        <h2 className="mb-2">Our most liked animated movie</h2>
        <div>
          <iframe width="853" height="480" src="https://www.youtube.com/embed/hXzcyx9V0xw" title="Elemental | Official Trailer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        
      </div>
    </div>
  )
}