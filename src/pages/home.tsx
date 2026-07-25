import PhotoWidget from "@/components/photo-widget";
import Container from "@/components/ui/container";

export default function Home() {
    return (
        <Container>
          <div className="grid grid-cols-4 gap-9 ">
            <PhotoWidget
              photo={{
                id: "1",
                title: "Photo 1",
                imageId: "portrait-tower.png",
                albums: [{
                    id: "1",
                    title: "Album 1"
                }, {
                    id: "2",
                    title: "Album 2"
                }, {
                    id: "3",
                    title: "Album 3"
                }]
              }}
            />
            <PhotoWidget
              photo={{
                id: "1",
                title: "Photo 1",
                imageId: "portrait-tower.png",
                albums: [{
                    id: "1",
                    title: "Album 1"
                }, {
                    id: "2",
                    title: "Album 2"
                }, {
                    id: "3",
                    title: "Album 3"
                }]
              }}
            />
            <PhotoWidget
              photo={{
                id: "1",
                title: "Photo 1",
                imageId: "portrait-tower.png",
                albums: [{
                    id: "1",
                    title: "Album 1"
                }, {
                    id: "2",
                    title: "Album 2"
                }, {
                    id: "3",
                    title: "Album 3"
                }]
              }}
            />
            <PhotoWidget
              photo={{
                id: "1",
                title: "Photo 1",
                imageId: "portrait-tower.png",
                albums: [{
                    id: "1",
                    title: "Album 1"
                }, {
                    id: "2",
                    title: "Album 2"
                }, {
                    id: "3",
                    title: "Album 3"
                }]
              }}
            />
            </div>
        </Container>
    )
}