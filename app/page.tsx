"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Clock, Users, Smartphone, Shield, Download, Apple, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LifelineLanding() {
  const scrollToDownload = () => {
    const element = document.getElementById('download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="Lifeline" width={32} height={32} />
          <span className="text-xl font-bold text-gray-900">Lifeline</span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-red-600 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-red-600 transition-colors">
            How It Works
          </Link>
          <Link href="#download" className="text-sm font-medium hover:text-red-600 transition-colors">
            Download
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-red-600 transition-colors">
            Contact
          </Link>
        </nav>
        <Button
          onClick={scrollToDownload}
          className="ml-auto md:hidden bg-red-600 hover:bg-red-700 text-white"
          size="sm"
        >
          <Download className="mr-1.5 h-4 w-4" />
          Download
        </Button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-red-50 to-pink-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200">🩸 Save Lives Today</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none text-gray-900">
                    Connect Blood Donors & Patients in <span className="text-red-600">Just a Few Clicks</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 text-sm sm:text-base md:text-xl">
                    Lifeline helps save lives by instantly connecting people who need blood with suitable donors nearby.
                    Find compatible blood types around you, anytime, anywhere.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link href="#download" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white">
                      <Heart className="mr-2 h-4 w-4" />I Need Blood
                    </Button>
                  </Link>
                  <Link href="#download" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-red-600 text-red-600 hover:bg-red-50">
                      <Users className="mr-2 h-4 w-4" />I Want to Donate
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    24/7 Available
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    Location-Based
                  </div>
                  <div className="flex items-center">
                    <Shield className="mr-1 h-4 w-4" />
                    Secure & Verified
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center mt-8 lg:mt-0">
                <div className="relative">
                  <Image
                    src="/logo.svg"
                    width={300}
                    height={500}
                    alt="Lifeline App Screenshot"
                    className="rounded-3xl shadow-2xl max-w-full h-auto"
                  />
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center animate-pulse">
                    <Heart className="w-8 h-8 text-white fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {/* <section className="w-full py-12 bg-white border-y">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600">10K+</div>
                <div className="text-sm text-gray-600">Lives Saved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">50K+</div>
                <div className="text-sm text-gray-600">Active Donors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">100+</div>
                <div className="text-sm text-gray-600">Cities Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">{"<2min"}</div>
                <div className="text-sm text-gray-600">Average Response</div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">Why Choose Lifeline?</h2>
                <p className="max-w-[900px] text-gray-600 text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our app is designed with one mission: to save lives by making blood donation and requests as simple as
                  possible.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-8 md:py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <MapPin className="mx-auto h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Location-Based Matching</h3>
                  <p className="text-gray-600">
                    Find compatible donors or patients near you using GPS technology. Distance and blood type
                    compatibility calculated instantly.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Clock className="mx-auto h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Real-Time Notifications</h3>
                  <p className="text-gray-600">
                    Get instant alerts when someone nearby needs your blood type or when a donor is available for your
                    request.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Shield className="mx-auto h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Verified & Secure</h3>
                  <p className="text-gray-600">
                    All users are verified through medical documentation. Your personal information is encrypted and
                    protected.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Smartphone className="mx-auto h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
                  <p className="text-gray-600">
                    Simple, intuitive interface designed for emergency situations. Request or offer blood donation in
                    just a few taps.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="mx-auto h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Community Driven</h3>
                  <p className="text-gray-600">
                    Join a community of life-savers. Track your donations, earn badges, and see the impact you're
                    making.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Heart className="mx-auto h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Emergency Support</h3>
                  <p className="text-gray-600">
                    24/7 emergency support with direct hospital integration. Critical requests get priority handling.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">How Lifeline Works</h2>
                <p className="max-w-[900px] text-gray-600 text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Saving lives has never been this simple. Here's how our app connects donors and patients in minutes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-8 md:py-12 grid-cols-1 md:grid-cols-3 lg:gap-12">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Sign Up & Verify</h3>
                <p className="text-gray-600">
                  Create your profile with blood type, location, and medical verification. Quick and secure registration
                  process.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Request or Offer</h3>
                <p className="text-gray-600">
                  Tap to request blood in emergency or mark yourself available as a donor. Specify urgency and location
                  details.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Connect & Save</h3>
                <p className="text-gray-600">
                  Get matched with compatible donors/patients nearby. Coordinate meeting location and save a life
                  together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-red-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Real Stories, Real Lives Saved
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white fill-current" />
                    </div>
                    <div>
                      <p className="text-gray-600 mb-4">
                        "My daughter needed emergency blood transfusion at 2 AM. Lifeline helped us find 3 compatible
                        donors within 15 minutes. This app literally saved her life."
                      </p>
                      <div className="font-semibold text-gray-900">Sarah Johnson</div>
                      <div className="text-sm text-gray-600">Mother, Emergency Patient</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-600 mb-4">
                        "I've donated blood 12 times through Lifeline. Knowing that I'm directly helping people in my
                        community gives me incredible satisfaction. The app makes it so easy."
                      </p>
                      <div className="font-semibold text-gray-900">Michael Chen</div>
                      <div className="text-sm text-gray-600">Regular Donor, O- Blood Type</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        {/* Download Section */}
        <section id="download" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Download Lifeline Today</h2>
                <p className="max-w-[900px] text-gray-300 text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of life-savers in your community. Available on Android.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                {/* <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Apple className="mr-2 h-5 w-5" />
                  Download for iOS
                </Button> */}
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-none text-white bg-red-600 hover:bg-gray-100 hover:text-red-600"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download for Android
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400 mt-4">
                {/* <span>⭐⭐⭐⭐⭐ 4.9/5 Rating</span>
                <span>•</span>
                <span>100K+ Downloads</span>
                <span>•</span> */}
                <span>Free to Use</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white"
      >
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
            <Heart className="w-4 h-4 text-white fill-current" />
          </div>
          <span className="text-sm text-gray-600">© 2024 Lifeline. Saving lives, one connection at a time.</span>
        </div>
        <nav className="sm:ml-auto flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 mt-4 sm:mt-0">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Medical Disclaimer
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Support
          </Link>
        </nav>
      </footer>
    </div>
  )
}
