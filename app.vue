<script setup>
import { useRepo } from 'pinia-orm';
import { GameModel } from '~/models/game.model';
import data from './models/mock.data.json';

const gameRepo = useRepo(GameModel);
gameRepo.save(data);

console.log(gameRepo.withAllRecursive().limit(1).get()); // Works!
// console.log(gameRepo.withAllRecursive().limit(5).get()); // Works but very slow!
// console.log(gameRepo.withAllRecursive().get()); // Extremely slow! Bug?!
</script>
