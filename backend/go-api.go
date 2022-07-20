package main

import (

    "net/http"
    "database/sql"
    "time"
    "log"
    // "fmt"//library of go
    "github.com/gin-gonic/gin"
    _"github.com/go-sql-driver/mysql"
)

var db *sql.DB

func main() {
    var err error 
    db, err = sql.Open("mysql", "root:@tcp(localhost:3306)/gomysql")
    if err != nil {
        panic(err)
    }

    db.SetConnMaxLifetime(time.Minute * 3)
    db.SetMaxOpenConns(10)
    db.SetMaxIdleConns(10)

    // fmt.Println("Hello, World!")
    router := gin.Default()
    router.GET("/", getAttractions)

    router.Run("localhost:8080")

    
}


// album represents data about a record album.
type Attraction struct {
    Id     int  `db:"id" json:"id"`
    Name  string  `db:"name" json:"title"`
    Detail  string `db:"detail" json:"artist"`
    Coverimage string  `db:"coverimage" json:"price"`
    Latitude  string `db:"latitude" json:"price"`
    Longtitude  string `db:"longtitude" json:"price"`
}


// albums slice to seed record album data.
// var albums = []album{
//     {ID: "1", Title: "Blue Train", Artist: "John Coltrane", Price: 56.99},
//     {ID: "2", Title: "Jeru", Artist: "Gerry Mulligan", Price: 17.99},
//     {ID: "3", Title: "Sarah Vaughan and Clifford Brown", Artist: "Sarah Vaughan", Price: 39.99},
// }



// getAlbums responds with the list of all albums as JSON.
func getAttractions(c *gin.Context) {
    var attractions []Attraction
 
    rows, err := db.Query("select * from attractions")
    if err != nil {
        log.Fatal(err)
    }
    defer rows.Close()
    for rows.Next() {
        var a Attraction
        err := rows.Scan(&a.Id, &a.Name, &a.Detail, &a.Coverimage, &a.Latitude, &a.Longtitude)
        if err != nil {
            log.Fatal(err)
        }
        // log.Println(id, name, detail, coverimage, latitude, longtitude)
        attractions = append(attractions, a)
    }
    err = rows.Err()
    if err != nil {
        log.Fatal(err)
    }


    c.IndentedJSON(http.StatusOK, attractions)

}
