"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  QrCode,
  Smartphone,
  Shield,
  Zap,
  Globe,
  Palette,
  Code,
  Star,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react"

export default function MertkodLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: "Uygulama Gerekmez",
      description: "Müşterileriniz herhangi bir mobil uygulama yüklemeden QR kod ile menüye ulaşır.",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Güvenli ve Kolay",
      description: "SSL güvenlik sertifikalı altyapımız ile müşterileriniz güvenle menüye erişir.",
    },
    {
      icon: <QrCode className="h-8 w-8 text-purple-600" />,
      title: "Tek Tuşla QR Oluştur",
      description: "Yönetim panelinizden bir tıkla QR kodunuzu oluşturun ve hemen kullanmaya başlayın.",
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "Hızlı Güncelleme",
      description: "Menülerinizi ve fiyatlarınızı anında güncelleyin, değişiklikler hemen yansır.",
    },
    {
      icon: <Globe className="h-8 w-8 text-teal-600" />,
      title: "Çoklu Dil Desteği",
      description: "Menülerinizi farklı dillerde sunarak uluslararası müşterilere hitap edin.",
    },
    {
      icon: <Code className="h-8 w-8 text-red-600" />,
      title: "Profesyonel Web Sitesi",
      description: "Modern ve responsive web sitesi tasarımı ile dijital varlığınızı güçlendirin.",
    },
  ]

  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      role: "Restoran Sahibi",
      content: "QR menü sistemi sayesinde müşterilerimiz menüye çok kolay ulaşıyor. Hem hijyenik hem de pratik!",
      rating: 5,
    },
    {
      name: "Elif Kaya",
      role: "Kafe İşletmecisi",
      content:
        "Menü baskı maliyetlerimiz tamamen ortadan kalktı. Fiyat güncellemelerini saniyeler içinde yapabiliyorum.",
      rating: 5,
    },
    {
      name: "Mehmet Demir",
      role: "Otel Müdürü",
      content: "Web sitesi tasarımımız çok profesyonel oldu. Rezervasyonlarımız %40 arttı!",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Code className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Mertkod</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                Özellikler
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
                Fiyatlar
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
                Referanslar
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                İletişim
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Özellikler
                </a>
                <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Fiyatlar
                </a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Referanslar
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                  İletişim
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              QR Menü ve Web Sitesi
              <span className="text-blue-600 block">Çözümleri</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              İşletmenizi dijitalleştirin! QR menü sistemi ve profesyonel web sitesi ile müşterilerinize modern bir
              deneyim sunun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  contactSection?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Hemen Başlayın
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 bg-transparent"
                onClick={() => window.open("http://adabellapizzabasaksehir.com/menu/", "_blank")}
              >
                Demo İnceleyin
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Neden Mertkod?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern teknoloji ile işletmenizi geleceğe taşıyacak özellikler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* QR Menu Service */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <QrCode className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">QR Menü Sistemi</CardTitle>
                <CardDescription className="text-lg">
                  Dijital menü çözümü ile müşterilerinize temassız hizmet
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Uygulama gerektirmez</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Anında menü güncellemesi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Çoklu dil desteği</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>SSL güvenlik sertifikası</span>
                </div>
              </CardContent>
            </Card>

            {/* Web Design Service */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <Palette className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Web Sitesi Tasarımı</CardTitle>
                <CardDescription className="text-lg">Profesyonel ve modern web sitesi çözümleri</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Responsive tasarım</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>SEO optimizasyonu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Hızlı yükleme</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>İçerik yönetim sistemi</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fiyat Paketleri</h2>
            <p className="text-xl text-gray-600">Size en uygun paketi seçin ve hemen başlayın</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Basic Package */}
            <Card className="border-2 border-blue-200">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Temel Paket</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mt-4">₺3.000</div>
                <p className="text-gray-600">İlk Yıl</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Sınırsız Ürün</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">10 Masa</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Özel QR Kod</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Teknik Destek</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Yenileme: ₺1.000/yıl</span>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Paketi Seç</Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="border-2 border-purple-200 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600">Popüler</Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Premium Paket</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mt-4">₺5.000</div>
                <p className="text-gray-600">İlk Yıl</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Sınırsız Ürün</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Sınırsız Masa</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Çoklu Dil Desteği</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Öncelikli Destek</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Yenileme: ₺1.000/yıl</span>
                </div>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">Paketi Seç</Button>
              </CardContent>
            </Card>

            {/* Web Design Package */}
            <Card className="border-2 border-green-200">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Web Sitesi</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mt-4">₺7.500</div>
                <p className="text-gray-600">Kurulum</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Responsive Tasarım</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">SEO Optimizasyonu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">İçerik Yönetimi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">1 Yıl Bakım</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Yıllık Bakım: ₺1.000</span>
                </div>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">Teklif Al</Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-gray-600 mt-8">
            * Tüm fiyatlara KDV dahildir. Her paket için yıllık yenileme ücreti ₺1.000'dir.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Müşteri Yorumları</h2>
            <p className="text-xl text-gray-600">Mertkod çözümlerini kullanan müşterilerimizin deneyimleri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Referans Siteler */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Referans Projelerimiz</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Papatya Huzurevi</h4>
                  <p className="text-gray-600 text-sm mb-4">Kurumsal Web Sitesi</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open("https://www.papatyahuzurevi.com.tr/", "_blank")}
                  >
                    Siteyi Görüntüle
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Kayaşehir Cam Balkon</h4>
                  <p className="text-gray-600 text-sm mb-4">Kurumsal Web Sitesi</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open("https://www.kayasehircambalkon.com/", "_blank")}
                  >
                    Siteyi Görüntüle
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Myproteknik</h4>
                  <p className="text-gray-600 text-sm mb-4">Kurumsal Web Sitesi</p>
                  <Button variant="outline" size="sm" onClick={() => window.open("https://myproteknik.com/", "_blank")}>
                    Siteyi Görüntüle
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Yurt Danışmanlık</h4>
                  <p className="text-gray-600 text-sm mb-4">Kurumsal Web Sitesi</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open("https://yurtdanismanlik.com/", "_blank")}
                  >
                    Siteyi Görüntüle
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <QrCode className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Adabella Pizza</h4>
                  <p className="text-gray-600 text-sm mb-4">QR Menü Sistemi</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open("http://adabellapizzabasaksehir.com/menu/", "_blank")}
                  >
                    QR Menüyü Görüntüle
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">İletişime Geçin</h2>
            <p className="text-xl text-gray-600">
              Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk duyarız
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>WhatsApp ile İletişim</CardTitle>
                <CardDescription>Formu doldurun, WhatsApp üzerinden size ulaşalım</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Ad Soyad</Label>
                    <Input id="name" placeholder="Adınız Soyadınız" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" placeholder="Telefon Numaranız" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Mesajınız</Label>
                  <Textarea id="message" placeholder="Mesajınızı yazın..." rows={4} />
                </div>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => {
                    const name = (document.getElementById("name") as HTMLInputElement)?.value || ""
                    const phone = (document.getElementById("phone") as HTMLInputElement)?.value || ""
                    const message = (document.getElementById("message") as HTMLTextAreaElement)?.value || ""
                    const whatsappMessage = `Merhaba, ${name} - Telefon: ${phone} - Mesaj: ${message}`
                    window.open(`https://wa.me/905365608595?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
                  }}
                >
                  WhatsApp'tan Mesaj Gönder
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Telefon</h3>
                      <p className="text-gray-600">+90 (536) 560 85 95</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">E-posta</h3>
                      <p className="text-gray-600">mertkodofficial@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Adres</h3>
                      <p className="text-gray-600">
                        Yıldız Teknik Üniversitesi, Davutpaşa Kampüsü, Teknoloji Geliştirme Bölgesi (TeknoPark), D2
                        Blok, Kat: 1, No: 106, Esenler, İstanbul, Türkiye
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  <Code className="h-6 w-6" />
                </div>
                <span className="text-2xl font-bold">Mertkod</span>
              </div>
              <p className="text-gray-400">QR menü ve web sitesi çözümleri ile işletmenizi dijitalleştirin.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Hizmetler</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-white transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    QR Menü Sistemi
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-white transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Web Sitesi Tasarımı
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Mobil Uygulama
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Teknik Destek
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Şirket</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#features"
                    className="hover:text-white transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    İletişim
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-white transition-colors cursor-pointer"
                    onClick={() => {
                      alert(
                        "Gizlilik Politikası: Kişisel verileriniz 6698 sayılı KVKK kapsamında korunmaktadır. Detaylı bilgi için bizimle iletişime geçin.",
                      )
                    }}
                  >
                    Gizlilik Politikası
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="hover:text-white transition-colors cursor-pointer"
                    onClick={() => {
                      alert(
                        "Kullanım Koşulları: Hizmetlerimizi kullanarak şartlarımızı kabul etmiş sayılırsınız. Detaylı bilgi için bizimle iletişime geçin.",
                      )
                    }}
                  >
                    Kullanım Koşulları
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">İletişim</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+90 (536) 560 85 95</li>
                <li>mertkodofficial@gmail.com</li>
                <li>Esenler, İstanbul</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Mertkod. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
