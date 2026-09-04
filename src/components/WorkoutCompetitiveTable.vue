<script>
export default {
  name: "WorkoutCompetitivetable",
};
</script>

<template>
  <div class="w-full overflow-x-auto">
    <table class="w-full border-collapse text-left text-sm">
      <thead>
        <tr class="border-b border-zinc-200">
          <th class="px-2 py-2.5 font-medium text-zinc-900 text-center"></th>
          <th class="px-2 py-2.5 font-medium text-zinc-900 text-center">FitPro</th>
          <th class="px-2 py-2.5 font-medium text-zinc-900 text-center">Trainly</th>
          <th class="px-2 py-2.5 font-medium text-zinc-900 text-center">Strong</th>
          <th class="px-2 py-2.5 font-medium text-zinc-900 text-center">Motion</th>
          <th class="px-2 py-2.5 font-medium text-zinc-900 text-center">Lift</th>
        </tr>
      </thead>

      <tbody class="text-zinc-600">
        <tr class="border-b border-zinc-200">
          <th class="px-2 py-2.5 font-medium text-zinc-900">Recommends next workout</th>
          <td class="px-2 py-2.5 text-center">●</td>
          <td class="px-2 py-2.5 text-center">●</td>
          <td class="px-2 py-2.5 text-center">—</td>
          <td class="px-2 py-2.5 text-center">●</td>
          <td class="px-2 py-2.5 text-center">—</td>
        </tr>

        <tr class="border-b border-zinc-200">
          <th class="px-2 py-2.5 font-medium text-zinc-900">Uses recovery</th>
          <td class="px-2 py-2.5 text-center">●</td>
          <td class="px-2 py-2.5 text-center">—</td>
          <td class="px-2 py-2.5 text-center">—</td>
          <td class="px-2 py-2.5 text-center">●</td>
          <td class="px-2 py-2.5 text-center">—</td>
        </tr>

        <tr class="border-b border-zinc-200">
          <th class="px-2 py-2.5 font-medium text-zinc-900">Flexible duration</th>
          <td class="px-2 py-2.5 text-center">—</td>
          <td class="px-2 py-2.5 text-center">●</td>
          <td class="px-2 py-2.5 text-center">—</td>
          <td class="px-2 py-2.5 text-center">●</td>
          <td class="px-2 py-2.5 text-center">●</td>
        </tr>

        <tr class="border-b border-zinc-200">
          <th class="px-2 py-2.5 font-medium text-zinc-900">User-created workouts</th>
          <td class="px-2 py-2.5 text-center">—</td>
          <td class="px-2 py-2.5 text-center">●</td>
          <td class="px-2 py-2.5 text-center">●</td>
          <td class="px-2 py-2.5 text-center">—</td>
          <td class="px-2 py-2.5 text-center">●</td>
        </tr>

        <tr class="border-b border-zinc-200">
          <th class="px-2 py-2.5 font-medium text-zinc-900">Automatic progression</th>
          <td class="px-2 py-2.5 text-center">●</td>
          <td class="px-2 py-2.5 text-center">●</td>
          <td class="px-2 py-2.5 text-center">—</td>
          <td class="px-2 py-2.5 text-center">—</td>
          <td class="px-2 py-2.5 text-center">—</td>
        </tr>

        <tr>
          <th class="px-2 py-2.5 font-medium text-zinc-900">Modular workouts</th>
          <td class="px-2 py-2.5 text-center">—</td>
          <td class="px-2 py-2.5 text-center">—</td>
          <td class="px-2 py-2.5 text-center">—</td>
          <td class="px-2 py-2.5 text-center">●</td>
          <td class="px-2 py-2.5 text-center">—</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
