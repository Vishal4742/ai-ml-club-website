# 📸 Profile Picture Upload Guide

This guide explains how to upload profile pictures for team members of the AI & ML Club website.

## 🎯 Quick Start

### Option 1: Local File Upload (Recommended)

1. **Prepare your image:**
   - Format: JPG or PNG
   - Size: 400x400 pixels (square)
   - File size: Under 200KB
   - Quality: Professional headshot

2. **Upload to project:**
   - Navigate to: `frontend/src/assets/images/team/`
   - Upload your image with naming convention: `firstname-lastname.jpg`
   - Example: `vishal-kumar.jpg`

3. **Update team data:**
   - Open: `frontend/src/data/team-members.ts`
   - Find your entry and update the `image` field
   - Example: `image: "/src/assets/images/team/vishal-kumar.jpg"`

### Option 2: External Image Hosting

1. **Upload to image hosting service:**
   - [Imgur](https://imgur.com/) (free)
   - [Cloudinary](https://cloudinary.com/) (free tier)
   - [AWS S3](https://aws.amazon.com/s3/) (paid)

2. **Get direct image URL:**
   - Copy the direct image URL
   - Update in `team-members.ts`

3. **Update team data:**
   ```typescript
   {
     id: 1,
     name: "Vishal Kumar",
     role: "President",
     image: "https://your-hosting-service.com/vishal-kumar.jpg",
     // ...
   }
   ```

## 📁 File Organization

### Current Team Structure
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

## 🛠️ Upload Methods

### Method 1: File Manager (cPanel)
1. Log into your hosting control panel
2. Navigate to File Manager
3. Go to: `frontend/src/assets/images/team/`
4. Click "Upload" and select your image
5. Ensure proper naming convention

### Method 2: FTP Client
1. Use FTP client (FileZilla, WinSCP)
2. Connect to your server
3. Navigate to the team images folder
4. Upload your image file

### Method 3: Git Repository
1. Add image to local project folder
2. Commit and push to repository
3. Deploy to hosting service

### Method 4: Drag & Drop (Development)
1. Open project in VS Code
2. Drag image file to `frontend/src/assets/images/team/`
3. VS Code will copy the file automatically

## 🎨 Image Requirements

### Technical Specifications
- **Format**: JPG, PNG, or WebP
- **Dimensions**: 400x400 pixels (1:1 aspect ratio)
- **File Size**: Maximum 200KB
- **Color Space**: sRGB
- **Resolution**: 72 DPI (web standard)

### Content Guidelines
- **Style**: Professional headshot
- **Background**: Clean, neutral background
- **Lighting**: Well-lit, no harsh shadows
- **Expression**: Friendly, approachable
- **Clothing**: Professional attire
- **Quality**: High resolution, no pixelation

## 🔧 Image Optimization

### Before Upload
1. **Resize**: Use online tools like [ResizeImage.net](https://www.resizeimage.net/)
2. **Compress**: Use [TinyPNG](https://tinypng.com/) for compression
3. **Format**: Convert to WebP for better compression (if supported)

### Recommended Tools
- **Online**: Canva, Pixlr, Photopea
- **Desktop**: GIMP, Paint.NET, Photoshop
- **Mobile**: Snapseed, Lightroom Mobile

## 📝 Naming Convention

### File Names
- Use lowercase letters
- Separate words with hyphens
- Include full name
- Add file extension

**Examples:**
- ✅ `vishal-kumar.jpg`
- ✅ `umesh-patel.png`
- ❌ `Vishal Kumar.jpg`
- ❌ `vishal_kumar.jpg`

### Team Member Names
Current team members and their file names:

| Name | Role | File Name |
|------|------|-----------|
| Vishal Kumar | President | `vishal-kumar.jpg` |
| Umesh Patel | Vice President | `umesh-patel.jpg` |
| Prakhar Sahu | General Manager | `prakhar-sahu.jpg` |
| Gaurav Jain | Event Manager | `gaurav-jain.jpg` |
| Archi Sharma | Event Manager | `archi-sharma.jpg` |
| Parul Ajit | Event Manager | `parul-ajit.jpg` |
| Arnav Singh | Graphic Designer | `arnav-singh.jpg` |
| Ayush Kumar | Tech Lead | `ayush-kumar.jpg` |
| Arpit Pandey | Public Relation | `arpit-pandey.jpg` |
| Prince Kumar | Discipline Head | `prince-kumar.jpg` |
| Khushi Kumari | Photographer | `khushi-kumari.jpg` |
| Pratish Mondal | Video Editor | `pratish-mondal.jpg` |

## 🔄 Fallback System

The website includes a fallback system:
1. **Primary**: Local image in `/src/assets/images/team/`
2. **Fallback**: Unsplash placeholder image
3. **Default**: Generic profile icon

If local image fails to load, it automatically shows the Unsplash placeholder.

## 🚀 Testing Your Upload

### Local Development
1. Start development server: `npm run dev`
2. Navigate to Team section
3. Check if your image displays correctly
4. Test fallback by temporarily renaming your image

### Production Deployment
1. Upload image to server
2. Deploy updated code
3. Clear browser cache
4. Test on live website

## 🆘 Troubleshooting

### Common Issues

**Image not displaying:**
- Check file path in `team-members.ts`
- Verify image file exists in correct folder
- Check file permissions (644 or 755)

**Image appears broken:**
- Verify image format is supported
- Check file size isn't too large
- Ensure proper file extension

**Fallback not working:**
- Check `fallbackImage` property in team data
- Verify Unsplash URL is accessible
- Test with different browser

### Getting Help

For technical support:
- **Tech Lead**: Ayush Kumar
- **General Manager**: Prakhar Sahu
- **Email**: [club-email@oct.edu.in]

## 📋 Checklist

Before uploading your profile picture:

- [ ] Image is 400x400 pixels
- [ ] File size under 200KB
- [ ] Professional headshot quality
- [ ] Proper file naming convention
- [ ] Uploaded to correct folder
- [ ] Updated team data file
- [ ] Tested locally
- [ ] Verified fallback works

## 🔗 Useful Links

- [Image Resizer](https://www.resizeimage.net/)
- [Image Compressor](https://tinypng.com/)
- [WebP Converter](https://convertio.co/jpg-webp/)
- [Professional Photo Tips](https://www.wikihow.com/Take-a-Good-Profile-Picture)

---

**Last Updated**: January 2024  
**Maintained by**: Tech Lead - Ayush Kumar 