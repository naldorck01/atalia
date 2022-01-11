import React from 'react'
import ContentLoader from 'react-content-loader'

const ImageGrid = props => (
  <ContentLoader
    viewBox="0 0 1000 1200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >    
    <rect x="0" y="0" rx="2" ry="2" width="320" height="320" />
    <rect x="340" y="0" rx="2" ry="2" width="320" height="320" />
    <rect x="680" y="0" rx="2" ry="2" width="320" height="320" />
    <rect x="0" y="350" rx="2" ry="2" width="320" height="320" />
    <rect x="340" y="350" rx="2" ry="2" width="320" height="320" />
    <rect x="680" y="350" rx="2" ry="2" width="320" height="320" />
    <rect x="0" y="710" rx="2" ry="2" width="320" height="320" />
    <rect x="340" y="710" rx="2" ry="2" width="320" height="320" />
    <rect x="680" y="710" rx="2" ry="2" width="320" height="320" />

  </ContentLoader>
)

ImageGrid.metadata = {
  name: 'Hassan Tijani.A',
  github: 'surepeps',
  description: 'Image Grid with Pagination',
  filename: 'ImageGrid',
}

export default ImageGrid