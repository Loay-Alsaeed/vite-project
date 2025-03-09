import { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Camera as Camera360, Send } from 'lucide-react';
import Data from '../data/Data';

const DesignDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(Data.find(p => p.id === parseInt(id)));
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const commentRef = useRef(null);

  if (!project || !parseInt(id)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Design not found</h2>
          <Link to="/" className="text-blue-500 hover:underline">Return to home</Link>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    setIsLiked(!isLiked);
    setProject(prev => ({
      ...prev,
      likes: isLiked ? prev.likes - 1 : prev.likes + 1
    }));
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.title,
          text: `Check out this amazing ${project.title} design!`,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: Date.now(),
        text: comment,
        date: new Date().toISOString(),
        author: 'Guest User'
      };
      setComments([...comments, newComment]);
      setComment('');
    }
  };

  return (
    <div className="min-h-screen  bg-gray-100">
      <div className=" mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-black hover:text-gray-900 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2 text-black" />
          <p className='text-black'>Back to Home</p>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-[600px] object-cover rounded-xl"
            />
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <button 
                  onClick={handleLike}
                  className="p-2 rounded-full bg-transparent hover:bg-gray-200 transition-colors flex items-center gap-2">
                  <Heart 
                    className={`w-6 h-6 ${isLiked ? 'text-pink-500' : 'text-gray-600'}`}
                    fill={isLiked ? "currentColor" : "none"}/>
                  <span>{project.likes || 0}</span>
                </button>
                <button 
                  onClick={handleShare}
                  className="p-2 rounded-full  hover:bg-gray-200 transition-colors bg-transparent">
                  <Share2 className="w-6 h-6" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-200 transition-colors bg-transparent">
                  <Camera360 className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-gray-600">{project.style}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">About this design</h2>
              <p className="text-gray-600 leading-relaxed">
                {project.description}. This stunning design showcases our commitment to creating spaces 
                that perfectly balance aesthetics and functionality. Every element has been carefully 
                selected to create a cohesive and inviting atmosphere that reflects the client's 
                personality and lifestyle.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Design Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Custom-designed furniture pieces</li>
                <li>Premium materials and finishes</li>
                <li>Optimal space utilization</li>
                <li>Natural light optimization</li>
                <li>Integrated smart home features</li>
              </ul>
            </div>

            <div id="comments" ref={commentRef} className="space-y-4">
              <h2 className="text-2xl font-semibold">Comments</h2>
              <form onSubmit={handleComment} className="flex gap-2">
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="flex-1 px-4 py-2 border border-gray-600 rounded-full focus:outline-none focus:ring-0 focus:ring-black-500"
                />
                <button style={{ background: 'transparent' }}
                  type="submit"
                  className=" text-black p-2 rounded-full focus:ring-0">
                  <Send className="w-5 h-5" />
                </button>
              </form>
              <div className="space-y-4 mt-6 overflow-scroll" style={{ maxHeight: '200px' }}>
                {comments.map(comment => (
                  <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <p className="font-semibold">{comment.author}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(comment.date).toLocaleDateString()}
                      </p>
                    </div>
                    <p className="mt-2 text-gray-600">{comment.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full text-black py-4 rounded-full hover:bg-gray-800 transition-all"
              style={{ border: '2px solid #000' }}>
              Request Similar Design
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignDetails;