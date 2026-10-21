for (n in subjects) {
         pesquise = pesquisa.toLowerCase()
         subjects[n].index_found = subjects[n][titleProperty].search(new RegExp(`${pesquise}`,"gi"))
         }