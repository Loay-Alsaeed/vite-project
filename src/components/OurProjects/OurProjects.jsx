import { Heart, Share2, Camera as Camera360, MessageCircle } from 'lucide-react';
import "./OurProjects.css";
import Data from '../../data/Data';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OurProjects = () => {
  const [projectsData, setProjectsData] = useState(Data);
  const navigate = useNavigate();

  const handleLike = (e, projectId) => {
    e.stopPropagation(); // Stop event from bubbling up
    setProjectsData(prevProjects => 
      prevProjects.map(project => 
        project.id === projectId ? { ...project, likes: project.likes + 1 } : project
      )
    );
  };

  const handleShare = (e, project) => {
    e.stopPropagation(); // Stop event from bubbling up
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: `Check out this amazing ${project.title} design!`,
        url: window.location.href
      });
    }
  };

  const handleProjectClick = (projectId) => {
    navigate(`/details/${projectId}`);
  };

  const handleCommentClick = (e, projectId) => {
    e.stopPropagation();
    navigate(`/details/${projectId}#comments`);
  };



    return(
        <>
        <section className="py-20 px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => handleProjectClick(project.id)}>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                  <p className="text-white/80">{project.style}</p>
                  <div className="flex mt-4">
                    <button 
                      onClick={(e) => handleLike(e, project.id)}
                      className="text-white hover:text-pink-500  transition-colors flex items-center gap-1 bg-transparent">
                      <Heart className="w-6 h-6" fill={project.likes > 0 ? "currentColor" : "none"} />
                      <span>{project.likes}</span>
                    </button>
                    <button 
                      onClick={(e) => handleShare(e, project)}
                      className="text-white hover:text-blue-500 transition-colors bg-transparent">
                      <Share2 className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={(e) => e.stopPropagation()}
                      className="text-white hover:text-green-500 transition-colors bg-transparent">
                      <Camera360 className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={(e) => handleCommentClick(e, project.id)}
                      className="text-white hover:text-yellow-500 transition-colors flex items-center gap-1 bg-transparent">
                      <MessageCircle className="w-6 h-6" />
                      <span>{project.comments.length}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        </>
    );
};
export default OurProjects;