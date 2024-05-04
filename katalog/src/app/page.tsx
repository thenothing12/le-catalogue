import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { HeartHandshake, PackageCheck, SmileIcon, Sprout } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Katalog Online,{' '}
          <span className="text-blue-600">
            aset digital
          </span>
          .
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foregroud"> Selamat Datang di Laman kami, Setiap aset atau produk yang kami tawarkan sangatlah dijamin baik mutu dan kualitasnya demi memenuhi kesempurnaan hingga sampai ke tangan pembeli.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href='/products' className={buttonVariants()}>Selengkapnya</Link>
          <Button variant="ghost">Sebuah persembahan dari kami &rarr;</Button>
        </div>
      </div>

      {/* todo: lists */}
    </MaxWidthWrapper>

    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-0">
          {unesaKontol.map((perk) => (
            <div key={perk.name} className="text-center md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                  {<perk.Icon className="w-1/3 h-1/3"/>}
                </div>
              </div>

              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">
                  {perk.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
    </>
  );
}

const unesaKontol = [
  {
    name: '100% Ramah Lingkungan',
    Icon: PackageCheck,
    description: "Seluruh produk yang kami tawarkan sepenuhnya ramah lingkungan dan tidak menimbulkan kerusakan atas keseimbangan alam yang ada, kami berkomitmen untuk terus menjaga kelestarian alam dan selalu berwawasan lingkungan dalam penerapan kami"
  },
  {
    name: 'Ucapan Terima Kasih',
    Icon: HeartHandshake,
    description: "Kami berterimakasih atas kepercayaan anda telah memilih produk kami, kami akan terus berkomitmen untuk terus berkembang dan berinovasi di masa mendatang"
  },
  {
    name: '0 Emisi Karbon',
    Icon: Sprout,
    description: "Kami berkomitmen dan mendukung upaya pemerintah untuk mewujudkan 0 emisi karbon dan transisi energi demi terwujudnya lingkungan yang hijau"
  }
]