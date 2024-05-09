import { gql } from '@apollo/client'

export const getProjectData = gql`
  query GetProjectDetails($id: String!) {
    railway {
      project(id: $id) {
        baseEnvironmentId
        createdAt
        deletedAt
        description
        expiredAt
        id
        isPublic
        isTempProject
        name
        prDeploys
        prForks
        subscriptionPlanLimit
        subscriptionType
        teamId
        updatedAt
        environments {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  }
`
