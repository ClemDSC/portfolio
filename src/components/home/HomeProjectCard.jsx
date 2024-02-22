import { Link } from 'react-router-dom';

function HomeProjectCard({project}) {
  return (
    <Link to={`/projects/${project.keyurl}`} className='flex flex-col pb-4 hover:cursor-pointer'>
        <div className='pb-4'>
            <img className='rounded-xl shadow hover:shadow-lg h-56 md:w-full md:h-72 object-cover object-top' src={project.thumbnail} alt={project.title} />
        </div>
        <h3 className='font-bold text-xl pb-2'>{project.title}</h3>
        <p className='text-sm badge badge-outline'>{project.type}</p>
    </Link>
  )
}

export default HomeProjectCard