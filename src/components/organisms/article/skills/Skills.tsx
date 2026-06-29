import './Skills.css'
import ArticleTittle from '../../../molecules/articleTittle/ArticleTittle';

const skillCategories = [
  {
    tittle : "Language/Framework/Library",
    skills : {
      comfortable : ['HTML5/CSS3','JavaScript(ES6+)', 'TypeScript','React', 'Next.js', 'React Hook Form', 'Tailwind CSS 4','Redux & Redux Tool kits'],
      familiar : ['Tanstack Query','ky','NextAuth','Zustand'],
      usable : ['Express', 'Java', 'NSISScript','Mui','shadcn/ui','tossPayments']
    }
  },
  {
    tittle : "Tools",
    skills : {
      comfortable :  ['Notion','Vite', 'Git', 'Linux',],
      familiar :  [ 'Jira', 'Swagger(OpenAPI)', 'Docker', 'StoryBook', 'Figma'],
      usable :  ['V0', 'vercel', 'Claude Code', 'Figma MCP'],
    }
  },
  {
    tittle : "Design Pattern",
    skills :{
      comfortable :  ['Atomic Design','Feature-Sliced Design (FSD)','Feature-Based Architecture'],
      familiar :  ['Material Design 3 (Design Token)'],
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