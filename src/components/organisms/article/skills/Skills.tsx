import './Skills.css'
import ArticleTittle from '../../../molecules/articleTittle/ArticleTittle';

const skillCategories = [
  {
    tittle : "Language/Framework/Library",
    skills : {
      comfortable : ['JavaScript(ES6+)', 'TypeScript', 'HTML5', 'CSS3','React', 'React Hook Form'],
      usable : ['Redux & Redux Tool kits', 'Modern CSS'],
      familiar : ['Node.js','Express', 'Java', 'NSISScript', 'Tanstack Query']
    }
  },
  {
    tittle : "Tools/Analytics",
    skills : {
      comfortable :  ['Vite', 'Git', 'Linux', 'Atomic Design'],
      usable :  [ 'Jira', 'Swagger(OpenAPI)', 'MVC','Docker' ],
      familiar :  ['Feature-Sliced Design (FSD)','Layered Architecture'],
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

          <div className="skill-group">
            <h4>편해요</h4>
            <div className="badge-container">
              {category.skills.comfortable.map((skill, idx) => (
                <span key={idx} className="badge badge-comfortable">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h4>어느정도 사용할 수 있어요</h4>
            <div className="badge-container">
              {category.skills.usable.map((skill, idx) => (
                <span key={idx} className="badge badge-usable">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h4>사용해봤어요</h4>
            <div className="badge-container">
              {category.skills.familiar.map((skill, idx) => (
                <span key={idx} className="badge badge-familiar">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
      </div>
    </article>
  )
}