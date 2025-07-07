import './Skills.css'
import ArticleTittle from '../../../molecules/articleTittle/ArticleTittle';

const skillCategories = [
  {
    tittle : "Language/Framework/Library",
    skills : {
      comfortable : ['HTML5/CSS3','JavaScript(ES6+)', 'TypeScript','React', 'React Hook Form'],
      familiar : ['Next.js','Tanstack Query','Tailwind CSS',],
      usable : ['Express', 'Java', 'NSISScript','Redux & Redux Tool kits','Mui','shadcn/ui']
    }
  },
  {
    tittle : "Tools",
    skills : {
      comfortable :  ['Notion','Vite', 'Git', 'Linux',],
      familiar :  [ 'Jira', 'Swagger(OpenAPI)', 'Docker'],
      usable :  ['V0', 'vercel'],
    }
  },
  {
    tittle : "Design Pattern",
    skills :{
      comfortable :  ['Atomic Design','Feature-Sliced Design (FSD)','Feature-Based Architecture'],
      usable :  [ '(Spring)MVC','(express)Layered Architecture'],
    }
  }
]

export default function Skills(){
  return (
    <article className='skills-frame' id="Skills">
      <ArticleTittle tittleText={"Skills"}/>
      <div className='skill-container'>
        <h2 className="section-title">SKILLS ABILITY</h2>
        {skillCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className='section-title'>{category.tittle}</h3>

          {category.skills.comfortable && category.skills.comfortable.length > 0 && (
            <div className="skill-group">
              <h4>Comfortable</h4>
              <div className="badge-container">
                {category.skills.comfortable.map((skill, idx) => (
                  <span key={idx} className="badge badge-comfortable">{skill}</span>
                ))}
              </div>
            </div>
          )}

          {category.skills.familiar && category.skills.familiar.length > 0 && (
            <div className="skill-group">
              <h4>Familiar</h4>
              <div className="badge-container">
                {category.skills.familiar.map((skill, idx) => (
                  <span key={idx} className="badge badge-familiar">{skill}</span>
                ))}
              </div>
            </div>
          )}

          {category.skills.usable && category.skills.usable.length > 0 && (
            <div className="skill-group">
              <h4>Usable</h4>
              <div className="badge-container">
                {category.skills.usable.map((skill, idx) => (
                  <span key={idx} className="badge badge-usable">{skill}</span>
                ))}
              </div>
            </div>
          )}

        </div>
      ))}
      </div>
    </article>
  )
}