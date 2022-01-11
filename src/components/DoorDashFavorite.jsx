import React from 'react'
import ContentLoader from 'react-content-loader'

const ImageGrid = props => (
  <ContentLoader
    viewBox="0 0 1000 1230"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >    
    <rect x="0" y="0" rx="2" ry="2" width="320" height="320" />
    <rect x="0" y="330" rx="2" ry="2" width="320" height="18" />
    <rect x="0" y="355" rx="2" ry="2" width="240" height="15" />
    <rect x="0" y="375" rx="2" ry="2" width="160" height="14" />

    <rect x="340" y="0" rx="2" ry="2" width="320" height="320" />
    <rect x="340" y="330" rx="2" ry="2" width="320" height="18" />
    <rect x="340" y="355" rx="2" ry="2" width="240" height="15" />
    <rect x="340" y="375" rx="2" ry="2" width="160" height="14" />

    <rect x="680" y="0" rx="2" ry="2" width="320" height="320" />
    <rect x="680" y="330" rx="2" ry="2" width="320" height="18" />
    <rect x="680" y="355" rx="2" ry="2" width="240" height="15" />
    <rect x="680" y="375" rx="2" ry="2" width="160" height="14" />

    <rect x="0" y="420" rx="2" ry="2" width="320" height="320" />
    <rect x="0" y="750" rx="2" ry="2" width="320" height="18" />
    <rect x="0" y="775" rx="2" ry="2" width="240" height="15" />
    <rect x="0" y="795" rx="2" ry="2" width="160" height="14" />
    
    <rect x="340" y="420" rx="2" ry="2" width="320" height="320" />
    <rect x="340" y="750" rx="2" ry="2" width="320" height="18" />
    <rect x="340" y="775" rx="2" ry="2" width="240" height="15" />
    <rect x="340" y="795" rx="2" ry="2" width="160" height="14" />

    <rect x="680" y="420" rx="2" ry="2" width="320" height="320" />
    <rect x="680" y="750" rx="2" ry="2" width="320" height="18" />
    <rect x="680" y="775" rx="2" ry="2" width="240" height="15" />
    <rect x="680" y="795" rx="2" ry="2" width="160" height="14" /> 

    <rect x="0" y="840" rx="2" ry="2" width="320" height="320" />
    <rect x="0" y="1170" rx="2" ry="2" width="320" height="18" />
    <rect x="0" y="1195" rx="2" ry="2" width="240" height="15" />
    <rect x="0" y="1215" rx="2" ry="2" width="160" height="14" />

    <rect x="340" y="840" rx="2" ry="2" width="320" height="320" />
    <rect x="340" y="1170" rx="2" ry="2" width="320" height="18" />
    <rect x="340" y="1195" rx="2" ry="2" width="240" height="15" />
    <rect x="340" y="1215" rx="2" ry="2" width="160" height="14" />

    <rect x="680" y="840" rx="2" ry="2" width="320" height="320" />
    <rect x="680" y="1170" rx="2" ry="2" width="320" height="18" />
    <rect x="680" y="1195" rx="2" ry="2" width="240" height="15" />
    <rect x="680" y="1215" rx="2" ry="2" width="160" height="14" />

  </ContentLoader>
)

ImageGrid.metadata = {
  name: 'Hassan Tijani.A',
  github: 'surepeps',
  description: 'Image Grid with Pagination',
  filename: 'ImageGrid',
}

export default ImageGrid