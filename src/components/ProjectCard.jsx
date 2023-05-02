
export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="col-sm-6 col-md-4">

      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
   
    </div>
  )
}