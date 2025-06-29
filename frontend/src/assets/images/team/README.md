# Team Member Profile Pictures

This folder contains profile pictures for team members of the AI & ML Club.

## 📁 Folder Structure
```
frontend/src/assets/images/team/
├── vishal-kumar.jpg          # President
├── umesh-patel.jpg           # Vice President
├── prakhar-sahu.jpg          # General Manager
├── gaurav-jain.jpg           # Event Manager
├── archi-sharma.jpg          # Event Manager
├── parul-ajit.jpg            # Event Manager
├── arnav-singh.jpg           # Graphic Designer
├── ayush-kumar.jpg           # Tech Lead
├── arpit-pandey.jpg          # Public Relation
├── prince-kumar.jpg          # Discipline Head
├── khushi-kumari.jpg         # Photographer
└── pratish-mondal.jpg        # Video Editor
```

## 📋 Upload Instructions

### Step 1: Prepare Images
- **Format**: JPG or PNG
- **Size**: 400x400 pixels (square)
- **Quality**: High resolution, professional headshots
- **File Size**: Keep under 200KB for web optimization

### Step 2: Upload Process
1. **Via File Manager**: Upload directly to this folder using your hosting control panel
2. **Via FTP**: Use an FTP client to upload files to this directory
3. **Via Git**: Add files to this folder and commit to your repository

### Step 3: Update Team Data
After uploading, update the image paths in `frontend/src/data/team-members.ts`:

```typescript
{
  id: 1,
  name: "Vishal Kumar",
  role: "President",
  image: "/src/assets/images/team/vishal-kumar.jpg", // Updated path
  // ...
}
```

## 🎯 Best Practices

1. **Naming Convention**: Use lowercase with hyphens (e.g., `firstname-lastname.jpg`)
2. **Optimization**: Compress images for web use
3. **Backup**: Keep original high-resolution images elsewhere
4. **Consistency**: Maintain same aspect ratio and style across all photos

## 🔧 Technical Notes

- Images are served from the public assets folder
- Paths are relative to the project root
- Images are automatically optimized by Vite during build
- Fallback to Unsplash images if local images are missing

## 📞 Support

For technical issues with image uploads, contact the Tech Lead (Ayush Kumar). 