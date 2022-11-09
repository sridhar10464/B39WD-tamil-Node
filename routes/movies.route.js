import express from "express";
import { 
  getAllMovies, 
  getMovieById, 
  createMovies, 
  deleteMovieById, 
  updateMovieById, 
} from "../services/movies.service.js";
const router = express.Router();

//  /movies - Display all movie data
//  send -> JSON
    router.get("/", async function(request, response) {
    // db.movies.find({language: "tamil", name: "vikram"})
    
    console.log(request.query);
    if(request.query.rating){
      request.query.rating = +request.query.rating
    }
    
    // Cursor - Pagination | toArray
      const movies = await getAllMovies(request);
      response.send(movies);
    });
    
    router.get("/:id", async function(request, response){
      const {id} = request.params;
    // db.movies.findOne({id: "100"})
    
      console.log(id);
      // const movie = movies.find((mv) => mv.id === id);
     const movie = await getMovieById(id);
     console.log(movie);
      movie
      ? response.send(movie)
      : response.status(404).send({ msg: "Movie not found" });
    });
    
    // express.json() - middleware (inbuilt) | Converts data to JSON
    router.post("/", express.json(), async function(request, response) {
      const data = request.body;
      console.log(data);
      // db.movies.insertMany(data)
      const result = await createMovies(data);
      response.send(result);
    });
    
    router.delete("/:id", async function(request, response){
      const {id} = request.params;
    // db.movies.deleteOne({id: "100"})
    
      console.log(id);
      // const movie = movies.find((mv) => mv.id === id);
     const result = await deleteMovieById(id);
     console.log(result);
      result.deletedCount > 0
      ? response.send({msg:"Movie was deleted successfully"})
      : response.status(404).send({ msg: "Movie not found" });
    });
    
    router.put("/:id", async function(request, response){
      const {id} = request.params;
      const data = request.body;
      console.log(data);
    // db.movies.updateOne({id: "100"} { $set: data})
    
      console.log(id);
      // const movie = movies.find((mv) => mv.id === id);
     const result = await updateMovieById(id, data);
     console.log(result);
      result
      ? response.send(result)
      : response.status(404).send({ msg: "Movie not found" });
    });
    
    export default router;


