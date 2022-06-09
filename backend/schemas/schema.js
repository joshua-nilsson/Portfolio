// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import overview from './overview'
import project from './project'
import projectMisc from './project-misc'
import experience from './experience'
import course from './course'
import certificate from './certificate'
import featuredSkill from './featured-skill'
import skill from './skill'
import brand from './brand'
import contact from './contact'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    overview,
    project,
    projectMisc,
    experience,
    course,
    certificate,
    featuredSkill,
    skill,
    brand,
    contact,
  ]),
})
