import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CourseDetailsPage, CreatorPage, HomePage, LessonsPage, LoginPage, NotFoundPage, RegisterPage, ReviewsPage, SearchPage } from './pages'
import './App.css'

export default function App() {
  return <BrowserRouter><Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/search" element={<SearchPage/>}/>
    <Route path="/course" element={<CourseDetailsPage/>}/>
    <Route path="/lessons" element={<LessonsPage/>}/>
    <Route path="/reviews" element={<ReviewsPage/>}/>
    <Route path="/creator" element={<CreatorPage/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
  </Routes></BrowserRouter>
}
