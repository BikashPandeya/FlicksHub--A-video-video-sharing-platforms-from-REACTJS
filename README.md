# FlicksHub - A Video Sharing Platform

FlicksHub is a modern video sharing platform built with React.js and Material-UI, offering a YouTube-like experience. The application uses the YouTube v3 API through RapidAPI to provide real-time video content, search functionality, and channel information.

🌐 **[CLick Here for Live Demo](https://flicks-hub-a-video-video-sharing-platforms-from-reactjs-mud4.vercel.app/)**



## 🚀 Features

- 📺 Browse trending videos
- 🔍 Search for videos and channels
- 📱 Responsive design for all devices
- 🎯 Category-based video filtering
- 📺 Video playback with related videos
- 📊 Channel details and statistics
- 🎨 Modern and intuitive UI
- ⚡ Fast and optimized performance

## 🛠️ Technologies Used

- **React.js** - Frontend library
- **Material-UI** - UI component library
- **Axios** - HTTP client
- **React Router** - Navigation
- **RapidAPI** - YouTube v3 API integration
- **Vite** - Build tool and development server

## 🏗️ Setup and Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/FlicksHub.git
   cd FlicksHub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory
   - Add your RapidAPI key:
     ```
     VITE_RAPID_API_KEY=your_rapidapi_key_here
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📝 Environment Variables

The following environment variables are required:

- `VITE_RAPID_API_KEY` - Your RapidAPI key for accessing the YouTube v3 API

## 🎯 Project Structure

```
src/
├── Components/         # React components
├── utils/             # Utility functions and constants
├── App.jsx            # Main application component
├── main.jsx          # Application entry point
└── styles/           # CSS and styling files
```

## 🌟 Key Features Explained

1. **Video Feed**
   - Displays trending videos
   - Category-based filtering
   - Responsive grid layout

2. **Search Functionality**
   - Real-time video search
   - Channel search support
   - Search suggestions

3. **Video Playback**
   - Embedded video player
   - Related videos sidebar
   - Video details and statistics

4. **Channel Pages**
   - Channel information
   - Channel videos
   - Subscriber count and stats

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Your Name - [Your GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- YouTube v3 API
- RapidAPI Platform
- Material-UI Team
- React.js Community
