import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Header from '../pages-2/Header';
import MainFeaturedPost from '../pages-2/MainFeaturedPost';
import FeaturedPost from '../pages-2/FeaturedPost';
import Main from '../pages-2/Main';
import Sidebar from '../pages-2/Sidebar';
import Footer from '../pages-2/Footer';
import post1 from '../pages-2/blog-post.1.md';
import post2 from '../pages-2/blog-post.2.md';
import post3 from '../pages-2/blog-post.3.md';


const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'GÖZÜMÜZ YÜKSEKLERDE!',
  description:
    "Aklın, bilimin ve teknolojinin yeni adresinde… Gözünü yükseklere dikenlerin yazdığı hikayeye, Lokal Ataşehir ile yeni bir sayfa daha ekleniyor. Sağlık Grubumuzun 17’inci hastanesi Lokal Ataşehir hizmetinizde!",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Vizyonumuz',
    date: 'Nov 12',
    description:
      'Vizyonumuz, toplumun sağlık ve refahını en üst düzeyde destekleyen bir lider sağlık kuruluşu olmaktır. Hastalarımıza güvenli, bütüncül ve yenilikçi sağlık hizmetleri sunarak, onların yaşam kalitesini artırmayı hedefliyoruz.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Başarımız',
    date: 'Nov 8',
    description:
      'Hastane, sağlık hizmetlerinin sunumunda yüksek kalite standartlarını benimsemektedir. Uzman doktorlar ve deneyimli sağlık personeli ile birlikte modern tıbbi ekipmanlar ve teknolojiler kullanılarak hasta odaklı sağlık hizmetleri sunulmaktadır.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Bu web sitesinde yer alan İçerikler, yalnızca bilgilendirme amaçlıdır ve ticari veya profesyonel danışmanlık hizmeti olarak yorumlanmamalıdır. İçeriklerin doğruluğu, güncelliği veya eksiksizliği konusunda herhangi bir garanti verilmemektedir. Bu web sitesini kullanarak veya İçerikleri kullanarak verilen kararlar tamamen kullanıcının kendi sorumluluğundadır.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <br />
      <CssBaseline />
      <Container maxWidth="lg">
        
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {/* <Main posts={posts.post1} /> */}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}